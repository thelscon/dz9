/*describe ('На основании gist https://gist.github.com/fiWhy/d11e4f4967436321123eb8e78071d65b , реализовать методы addIngridientToKettle. Принимает в объект ингредиентов где ключ - название ингредиента, а значение - его кол-во. Когда ингредиент добавляется, в самом объекте его кол-во должно уменьшиться cook - метод принимает рецепт из книги и если все ингредиенты добавлены в правильном кол-ве - отдает строку, которая является ключом рецепта. Иначе выводит в консоль предупреждение, что ингредиентов не достаточно.', function () {
    describe ( 'Проверка на передачу инградиента: ', function () {
        it ( 'Инградиента не существует:', function () {
            assert.isNaN ( kitchen.addIngridientToKettle('test', '5') ) ;
        } ) ;
        it ( 'Не существующее количество инградиента:', function () {
            assert.isNaN ( kitchen.addIngridientToKettle('lava', 'test') ) ;
        } ) ;
    } ) ;
    describe ( 'Проверка рецепта: ', function () {
        it ( 'Несуществующий рецепт:', function () {
            assert.isNaN ( kitchen.cook ('test') ) ;
        } ) ;
    } ) ;
}) ;*/