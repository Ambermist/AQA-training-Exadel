const dataTypesArr = [1, 1234567890123456789012345678901234567890n, 'hi', true, null, undefined, Math, Symbol("id")];
dataTypesArr.forEach(el => console.log(typeof el + ' ' +  !el + ' ' + !!el));