using Integrant.EShop.Data.Contracts.Repositories;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Integrant.EShop.Services.Test.NUnit
{
    [TestFixture]
    public class ProductServiceTest
    {
        private ProductService productService;

        [SetUp]
        public void TestInitialize()
        {
            var productRepoMock = new Mock<IProductRepository>();
            productRepoMock.Setup(s => s.GetProductById(It.IsAny<int>())).ReturnsAsync(new Data.Contracts.DTOs.ProductInfo());
            productService = new ProductService(productRepoMock.Object);
        }
        [TestCase(1)]
        [TestCase(2)]
        public async Task GetProductByIdShouldNotNullTest(int Id)
        {
            var product = await productService.GetProductById(Id);
            Assert.IsNotNull(product);
        }
        [TestCase(-1)]
        [TestCase(0)]
        public async Task GetProductByIdShouldBeNullTest(int Id)
        {
            var product = await productService.GetProductById(Id);
            Assert.IsNull(product);
        }
        [Test]
        public void ShouldThrowExceptionIfProductRepositoryIsNull()
        {
            var exception = Assert.Throws<ArgumentNullException>(() => new ProductService(null));
            Assert.AreEqual("productRepository", exception.ParamName);
        }
    }
}
