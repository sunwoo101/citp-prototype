using Backend.Models.Requests;
using Backend.Models.Responses;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WordBankController(WordBankService wordBankService) : ControllerBase
{
    [HttpPost("add")]
    public async Task<IActionResult> AddWord([FromBody] AddWordRequest request)
    {
        var (success, message) = await wordBankService.AddWordAsync(request);

        return Ok(new ApiResponse<object>(success, message));
    }
}
