import {soma} from './functions';
import subtracao from './sub';

const vet = [1, 3, 5, 7, 9];

const vet2 = vet.map((item) => item * 4);

console.log(vet2);

const sum = vet.reduce(function(total, next){
    return total + next;
});
console.log(sum);

const [a, b, ...c] = vet;
console.log(a);
console.log(b);
console.log(c);

console.log('soma - ' + soma(1, 2));

console.log('sub - ' + soma(5, 2));