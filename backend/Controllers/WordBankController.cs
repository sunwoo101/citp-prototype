using Backend.Models.Entities;
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

        if (success)
            return Ok(new ApiResponse<object>(success, message));

        return BadRequest(new ApiResponse<object>(success, message));
    }

    [HttpGet("get")]
    public async Task<IActionResult> GetWords([FromQuery] GetWordsRequest request)
    {
        var (success, message, words) = await wordBankService.GetWordsAsync(request);

        if (success)
            return Ok(new ApiResponse<List<Word>>(success, message, words));

        return BadRequest(new ApiResponse<object>(success, message));
    }

    [HttpGet("count")]
    public async Task<IActionResult> GetCount()
    {
        var (success, message, count) = await wordBankService.GetCountAsync();

        if (success)
            return Ok(new ApiResponse<int>(success, message, count));

        return BadRequest(new ApiResponse<object>(success, message));
    }
}
