function foo() {
    for (var i = 0; i < 50; i++) {
        document.write(i);
    }
}
foo();

const para = document.getElementById('test');

para.innerHTML = 'Hello';
