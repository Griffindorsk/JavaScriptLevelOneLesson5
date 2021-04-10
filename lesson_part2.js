// Задание #4+5
declaration.innerHTML = '<h3>Задание #4+5</h3><p>Работа с товарами: сначала 5-е задание (автоматическая генерация каталога), затем 4-е (заполнение и вывод корзины товаров)<p><br>';
declarationBlock.appendChild(declaration);
console.log('Задание #4+5');
alert('Задание #4+5');
// убираем предыдущее задание с экрана
let boardCell = document.getElementById('board');
boardCell.outerHTML = '';

// функция автоматического заполнения тестового каталога товаров
function testFulfillment(numberOfProducts) {
    var sizesAvailable = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    var colorsAvailable = ['aquamarine', 'cadetblue', 'darkcyan', 'goldenrod', 'hotpink', 'indianred', 'khaki', 'lawngreen', 'maroon'];
    var gendersAvailable = ['M', 'F', 'Unisex'];
    var basicPriceRange = [100, 500];
    var purchasingPriceRange = [30, 50];
    var productsCatalog = [];
    for (i = 0; i < numberOfProducts; i++) {
        // модель товарной позиции в каталоге, включая метод расчета цены с учетом скидки
        productsCatalog[i] = {
            mainCategory: 'одежда',
            subCategory: 'футболки',
            name: 'супер-мега бренд',
            gender: gendersAvailable[Math.floor(Math.random() * (gendersAvailable.length))],
            size: sizesAvailable[Math.floor(Math.random() * (sizesAvailable.length))],
            color: colorsAvailable[Math.floor(Math.random() * (colorsAvailable.length))],
            basicConsumerPrice: basicPriceRange[0] + Math.floor(Math.random() * (basicPriceRange[1] - basicPriceRange[0] + Number(1))),
            purchasingPrice: purchasingPriceRange[0] + Math.floor(Math.random() * (purchasingPriceRange[1] - purchasingPriceRange[0] + Number(1))),
            finalPrice: function (discount) {
            // проверяем в каком формате пришло значение скидки и если все Ok, то возвращаем цену с учетом скидки
            var lastSymbol = discount.charAt(discount.length - 1);
            if (lastSymbol == '%') {
                // если скидка задана со знаком %, то удаляем этот знак
                discount = discount.slice(0, (discount.length - 1));
                // задаем индикатор для формата скидки
                var percentage = true;
            }
            else {
                var percentage = false;
            }
            if (!isNaN(discount)) {
                if (Number(discount) >= 0) {
                    if (percentage) {
                        if (discount <= 100) {
                            return this.basicConsumerPrice * (100 - discount) / 100;
                        }
                        else {
                            alert('скидка не может быть больше 100%!');
                        }
                    }
                    else {
                        if (discount <= 1) {
                            return this.basicConsumerPrice * (1 - discount);
                        }
                        else {
                            alert('скидка не может быть больше 1!');
                        }
                    }
                }
                else {
                    alert('Скидка не может быть отрицательной.');
                }
            }
            else {
                alert('Скидка задана неверно. Необходимо задать числовое значение в долях единицы (например, 0.3) или процентах со знаком % (например, 30%)');
            }
        }
    }
}
return productsCatalog;
}

// заполняем тестовый каталог:
alert('заполняем тестовый каталог для дальнейшей работы');
var numberOfProducts = prompt('Задайте количество позиций в тестовом каталоге. Каталог будет заполнен автоматически.');
var productsCatalog = testFulfillment(numberOfProducts);

console.log(productsCatalog[i]); // получившийся каталог в консоли:

function printOnPage(arrayOfObjects, identity) {
    for (i = 0; i < arrayOfObjects.length; i++) { // перебор товаров
        document.write('<h3> ' + identity + ' # ' + (i + +1) + '</h3>');
        for (let key in arrayOfObjects[i]) { // перебор свойств товара
            var product = arrayOfObjects[i];
            var featureValue = product[key];
            document.write('<p>' + key + ': ' + featureValue + '</p>');
        }
        document.write('<br>');
    }
}

printOnPage(productsCatalog, 'Товар в каталоге');

// заполняем корзину товаров
// корзина товаров - это массив объектов
var basket = [];
var basketVolume = prompt('сколько позиций планируете заказать?');
for (i = 0; i < basketVolume; i++) {
    var k = prompt('выберите номер товара для добавления в корзину');
    k = parseInt(k);
    k = k - 1;
    var n = prompt('требуемое кол-во');
    n = parseInt(n);
    var discount = prompt('какую скидочку желаете (укажите, например, 20% или 0.2)?');
    basket[i] = {
        productIndex: (k + +1),
        productDescription: productsCatalog[k],
        discountedPrice: productsCatalog[k].finalPrice(discount),
        quantity: n,
        itemTotalPrice: n * productsCatalog[k].finalPrice(discount)
    }
}
printOnPage(basket, 'Товар в корзине');
console.log(basket);

// посчитаем общую стоимость товаров в корзине
var TotalSum = 0;
for (i = 0; i < basket.length; i++) {
    TotalSum = TotalSum + basket[i].itemTotalPrice;
}
console.log(TotalSum);
document.write('<br><p>Всего заказано товаров на сумму: ' + TotalSum + '</p>');