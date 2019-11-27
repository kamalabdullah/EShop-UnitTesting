using Integrant.EShop.Data.Contracts.Repositories;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Integrant.EShop.Services.Test.MSTest
{
    [TestClass]
    public class ProductServiceTest
    {
        private ProductService productService;

       [TestInitialize]
        public void TestInitialize()
        {
            var productRepoMock = new Mock<IProductRepository>();
            productRepoMock.Setup(s => s.GetProductById(It.IsAny<int>())).ReturnsAsync(new Data.Contracts.DTOs.ProductInfo());
            productService = new ProductService(productRepoMock.Object);
        }
        [DataTestMethod]
        [DataRow(1)]
        [DataRow(2)]
        public async Task GetProductByIdShouldNotNullTest(int Id)
        {
            var product = await productService.GetProductById(Id);
            Assert.IsNotNull(product);
        }
        [DataTestMethod]
        [DataRow(-1)]
        [DataRow(0)]
        public async Task GetProductByIdShouldBeNullTest(int Id)
        {
            var product = await productService.GetProductById(Id);
            Assert.IsNull(product);
        }
        [TestMethod]
        public void ShouldThrowExceptionIfProductRepositoryIsNull()
        {
            var exception = Assert.ThrowsException<ArgumentNullException>(() => new ProductService(null));
            Assert.AreEqual("productRepository", exception.ParamName);
        }
    }
}
