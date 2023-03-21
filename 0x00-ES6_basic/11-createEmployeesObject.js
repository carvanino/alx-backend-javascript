export default function creteEmployeesObject(departmentName, employees) {
  const newObject = {
    [departmentName]: employees,
  };
  return newObject;
}
