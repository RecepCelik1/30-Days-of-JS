
function higherOrder(n,anan) {
    console.log(`anan: ` + anan)
    function doSomething(m) {
        function doWhatEver(t) {
            return 2*n + 3*m + t;
        }
        return doWhatEver
    }
    return doSomething
}



console.log(higherOrder(2,30)(3)(10)) // bir yüksek mertebeden fonksiyon tanımladığımız zaman o fonksiyonun döndürdüğü diğer
                                      // fonksiyonlara yanda görüldüğü gibi parantezler tanımlayarak parametrelerine değerler 
                                      // atayabiliyoruz. Parametre olarak bir fonksiyon kullanılan fonksiyonların return ettiği değer
                                      // o higher order fonksiyonun parametresi olur artık.

