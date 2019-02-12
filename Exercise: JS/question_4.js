var object_1 = {
    id: 1,
    name: "Kunark Khewal",
    competency: "MEAN",
    RM: "Dipesh Singh"
}

console.log("The Key and values of object 1 is :  ");
printObject(object_1);

console.log("");

var object_2 = {};
object_2 = shiftObjectData(object_1,object_2);

console.log("The Key and values of object 2 is :  ");
printObject(object_2);

function shiftObjectData(obj1, obj2) {
    for (key in obj1) {
        obj2[key] = obj1[key];
    }
    return obj2;
}

function printObject(object) {
    for (key in object) {
        console.log(key + " = " + object[key]);
    }
}
