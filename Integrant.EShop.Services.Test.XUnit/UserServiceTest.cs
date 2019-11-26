using Integrant.EShop.Data.Contracts.Repositories;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace Integrant.EShop.Services.Test.XUnit
{
    public class UserServiceTest
    {
        private UserService userService;
        public UserServiceTest()
        {
            var userRepoMock = new Mock<IUserRepository>();
            userService = new UserService(userRepoMock.Object);
        }
        [Fact]
        public void ShouldReturnNullIfUserNameEmpty()
        {
            var user = userService.GetUserByName("");
            Assert.Null(user);
        }
        [Fact]
        public void ShouldThrowExceptionIfUserRepositoryIsNull()
        {
            var exception = Assert.Throws<ArgumentNullException>(() => new UserService(null));
            Assert.Equal("userRepository", exception.ParamName);
        }
    }
}
