using ARMS.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ARMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OEOMappingsController : ControllerBase
    {
        private readonly OEOMContext _context;

        public OEOMappingsController(OEOMContext context)
        {
            _context = context;
        }

        // GET: api/OEOMappings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OEOMapping>>> GetOEOMappings()
        {
            return await _context.OEOMappings.ToListAsync();
        }

        // GET: api/OEOMappings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OEOMapping>> GetOEOMapping(int id)
        {
            var oeomapping = await _context.OEOMappings.FindAsync(id);

            if (oeomapping == null)
            {
                return NotFound();
            }

            return oeomapping;
        }

        // POST: api/OEOMappings
        [HttpPost]
        public async Task<ActionResult<OEOMapping>> PostOEOMapping(OEOMapping oeomapping)
        {
            _context.OEOMappings.Add(oeomapping);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOEOMapping), new { id = oeomapping.SrNo }, oeomapping);
        }
    }

}
