using Integrant.EShop.Data.Contracts.Repositories;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;

namespace Integrant.EShop.Services.Test.MSTest
{
    [TestClass]
    public class UserServiceTest
    {
        private UserService userService;
        [TestInitialize]
        public void TestInitialize()
        {
            var userRepoMock = new Mock<IUserRepository>();
            userService = new UserService(userRepoMock.Object);
        }
        [TestMethod]
        public void ShouldReturnNullIfUserNameEmpty()
        {
            var user = userService.GetUserByName("");
            Assert.IsNull(user);
        }
        [TestMethod]
        public void ShouldThrowExceptionIfUserRepositoryIsNull()
        {
            var exception = Assert.ThrowsException<ArgumentNullException>(() => new UserService(null));
            Assert.AreEqual("userRepository", exception.ParamName);
        }
    }
}
