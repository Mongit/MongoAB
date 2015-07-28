var myClass = function(dependency, nonExistentDEpendency, extraParameter) {
    console.log("myClass constructed");
    
    console.log("nonExistentDependency: " + nonExistentDEpendency);
    console.log("extraParameter: " + extraParameter);
};

myClass.$inject = ["myDependency", "someUnknownDependency?"];
module.exports = myClass;