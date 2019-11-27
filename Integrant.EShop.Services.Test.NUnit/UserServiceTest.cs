using Integrant.EShop.Data.Contracts.Repositories;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Integrant.EShop.Services.Test.NUnit
{
    [TestFixture]
    public class UserServiceTest
    {
        private UserService userService;
        [SetUp]
        public void TestInitialize()
        {
            var userRepoMock = new Mock<IUserRepository>();
            userService = new UserService(userRepoMock.Object);
        }
        [Test]
        public void ShouldReturnNullIfUserNameEmpty()
        {
            var user = userService.GetUserByName("");
            Assert.IsNull(user);
        }
        [Test]
        public void ShouldThrowExceptionIfUserRepositoryIsNull()
        {
            var exception = Assert.Throws<ArgumentNullException>(() => new UserService(null));
            Assert.AreEqual("userRepository", exception.ParamName);
        }
    }
}
