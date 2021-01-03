const UserValidation = (values) => {
    console.log('ENTRA AL VALIDOR DEL FORMULARIO')
    console.log(values)
    const errors = {};

    if (!values.name || values.name === "") {
        errors.name = "Nama harus diisi";
    }

    if (!values.lastname || values.lastname === "") {
        errors.lastname = "Umur harus diisi";
    }

    if (!values.age || values.age === "") {
        errors.age = "Alamat harus diisi";
    }

    if (!values.ci || values.ci === "") {
        errors.ci = "No HP harus diisi";
    }

    return errors
};

export default UserValidation;