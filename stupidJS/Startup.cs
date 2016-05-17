using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(stupidJS.Startup))]
namespace stupidJS
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
