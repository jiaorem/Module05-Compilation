let car = 
{
    brand: "Toyota",
    variant: "Wigo",
    transmission: "Automatic",
    lights: 
    {
        front: "LED",
        rear: "LED/Bulb",
        signal: "Bulb"
    },

    displayBrand()
    {
        alert(this.brand);
        //document.writeln(this.transmission);
    }
}

class myCar
{
    constructor (brand, variant, transmission)
    {
        this.brand = brand;
        this.variant = variant;
        this.transmission = transmission;
    }
}

function vehicle()
{
    this.vehicleType = "vehicleType";
}
vehicle.prototype.display=function()
{
    return "The brand is: " +this.vehicleType;
}

function MyCar(vehicleType)
{
    this.vehicleType = vehicleType;
}

MyCar.prototype=Object.create(vehicle.prototype);
var mycar = new MyCar("Toyota");