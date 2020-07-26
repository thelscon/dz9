'use strict' ;

alert ('На основании gist https://gist.github.com/fiWhy/d11e4f4967436321123eb8e78071d65b , реализовать методы addIngridientToKettle. Принимает в объект ингредиентов где ключ - название ингредиента, а значение - его кол-во. Когда ингредиент добавляется, в самом объекте его кол-во должно уменьшиться cook - метод принимает рецепт из книги и если все ингредиенты добавлены в правильном кол-ве - отдает строку, которая является ключом рецепта. Иначе выводит в консоль предупреждение, что ингредиентов не достаточно.') ;

const magicBook = {
    recipes: {
        golem: {
            bone: 10,
            stone: 100,
            nail: 100,
            poo: 53
        },
        littleDevil: {
            lava: 10,
            evil: 999
        },
    },
};

const kitchen = {
    bone: 999,
    stone: 999,
    nail: 999,
    poo: 999,
    lava: 999,
    evil: 999,
    kettle: { 
        material: 'metal',
        ingridients: {},
    },
    addIngridientToKettle(nameOfIngridient, amount) {
        if ( nameOfIngridient in this ) {
            if ((Number ( amount )) && (amount <= this[nameOfIngridient])) {
                this[nameOfIngridient] -= amount ;
                this.kettle.ingridients[nameOfIngridient] = amount ;
            }
            else {
                console.log ( `Не существующее количество "${amount}" в ${nameOfIngridient}.` ) ;
                return NaN ;
            }
        }
        else {
            console.log ( `Инградиента ${nameOfIngridient} не существует.` ) ;
            return NaN ;
        }
    },

    cook(recipe) {
        let yesno = true ;
        if (recipe in magicBook.recipes) {
            for (let key in magicBook.recipes[recipe]) {
                if (this.kettle.ingridients[key] >= magicBook.recipes[recipe][key]) {
                }
                else {
                    console.log (`Инградиентов для ${recipe}, а именно ${key} - не достаточно`) ;
                    yesno = false ;
                }
            }
            if (!yesno) {
                console.log (`В общем, инградиентов для ${recipe} не достаточно.`) ;
            }
            else {
                console.log (`Инградиентов для ${recipe} достаточно.`) ;
            }
        }
        else {
            console.log ( 'Такого рецепта не существует.' ) ;
            return NaN ;
        }
    },
};

kitchen.addIngridientToKettle ('bone', '1') ;
kitchen.addIngridientToKettle ('lava', '10') ;
kitchen.addIngridientToKettle ('stone', '1000') ;
kitchen.addIngridientToKettle ('nail', '10') ;
kitchen.addIngridientToKettle ('poo', '53') ;
kitchen.addIngridientToKettle ('evil', '999') ;

kitchen.cook ('golem') ;
kitchen.cook ('littleDevil') ;

console.log ( 'Добавлено инградиентов - ' , kitchen.kettle.ingridients, 'Осталось инградиентов - ' , kitchen ) ;