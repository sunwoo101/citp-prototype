using Backend.Data;
using Backend.Services;
using Microsoft.EntityFrameworkCore;

namespace Backend;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        string[] allowedOrigins = new[]
        {
            "http://localhost:5173",
            "http://127.0.0.1:5173",
            "https://localhost:5173",
            "http://154.53.56.9",
        };

        builder.Services.AddCors(options =>
        {
            options.AddPolicy("DevCors", policy =>
            {
                policy.WithOrigins(allowedOrigins)
                      .AllowAnyHeader()
                      .AllowAnyMethod();
            });
        });

        // Add services to the container.
        builder.Services.AddDbContext<AppDbContext>(options =>
            options.UseSqlite("Data Source=database.sqlite"));
        builder.Services.AddControllers();
        builder.Services.AddScoped<WordBankService>();

        if (builder.Environment.IsDevelopment())
        {
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
        }
        else
        {
            builder.WebHost.ConfigureKestrel(serverOptions =>
            {
                serverOptions.ListenAnyIP(5039); // Bind to 0.0.0.0
            });
        }

        var app = builder.Build();

        app.UseCors("DevCors");

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        else
        {
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.MapFallbackToFile("index.html");
        }


        app.UseAuthorization();
        app.MapControllers();

        app.Run();
    }
}
