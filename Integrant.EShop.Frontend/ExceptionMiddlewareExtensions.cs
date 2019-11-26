using Integrant.EShop.Frontend.Models;
using log4net;
using log4net.Core;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using System.Net;

namespace Integrant.EShop.Frontend
{
    public static class ExceptionMiddlewareExtensions
    {
        private static readonly ILog Logger = LogManager.GetLogger(typeof(ExceptionMiddlewareExtensions));
        public static void ConfigureExceptionHandler(this IApplicationBuilder app)
        {
            app.UseExceptionHandler(appError =>
            {
                appError.Run(async context =>
                {
                    context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    context.Response.ContentType = "application/json";

                    var contextFeature = context.Features.Get<IExceptionHandlerFeature>();
                    if (contextFeature != null)
                    {
                        Logger.Error($"Something went wrong: {contextFeature.Error}");

                        await context.Response.WriteAsync(new ErrorDetails()
                        {
                            StatusCode = context.Response.StatusCode,
                            Message = "Internal Server Error, " + contextFeature.Error.Message
                        }.ToString());
                    }
                });
            });
        }
    }
}
