using ARMS.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ARMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly OEOMContext _context;

        public EmployeesController(OEOMContext context)
        {
            _context = context;
        }

        // GET: api/Employees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
            return await _context.Employees.ToListAsync();
        }

        // GET: api/Employees/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(string id)
        {
            var employee = await _context.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }

        // POST: api/Employees
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmployee), new { id = employee.EmpAdid }, employee);
        }

        [HttpGet("withQueryParams")]
        public IActionResult VerifyMethod([FromQuery] string empAdid, [FromQuery] string type)
        {
            
            
            var employee = _context.Employees
                .Include(x => x.OEOMappings)
                //.ThenInclude(eom => eom.OEOMapping) // Include OEOMapping as well
                .FirstOrDefault(x => x.EmpAdid == empAdid &&
                                      x.OEOMappings.Any(o => o.OEOMapping.Type == type));

            if (employee == null)
            {
                return NotFound($"Employee with ID {empAdid} and type {type} not found.");
            }

            return Ok(employee);
        }


    }
}
