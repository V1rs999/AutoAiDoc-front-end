export default function EditVin() {
  let Vin;
  do {
    Vin = prompt("Edit Vin", "");
    if (Vin !== null && Vin.length !== 17) {
      alert("Довжина VIN повинна бути рівною 17 символам");
    }
  } while (Vin !== null && Vin.length !== 17);

  return Vin;
}
