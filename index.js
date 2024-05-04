//express
const express = require('express');
const req = require('express/lib/request');
const app = express();
const PORT = 3000; // puede cambiar por otro puerto libre
//array
let estudiantes = [
    {id: 1, ci: '9458457', nummatricula: '6654BA', nombres: 'Kevin',apellidos: 'Camacho Rodriguez', fecha_nacimiento: '26/07/1999', municipio:'Punata', direccion:'Av. Libertadores', numero_celular: '76952124', correo_electronico: 'k77976582@gmail.com' },
    {id: 2, ci: '1354584', nummatricula: '6655BA', nombres: 'Oliver',apellidos: 'Coca Cano', fecha_nacimiento: '03/05/2003', municipio:'Cliza', direccion:'Av. Ramon lopez', numero_celular: '75642142', correo_electronico: 'oliver@gmail.com' },
    {id: 3, ci: '5412147', nummatricula: '6656BA', nombres: 'Alejandra',apellidos: 'Montaño Camacho', fecha_nacimiento: '20/01/1999', municipio:'Punata', direccion:'Calle Potosi', numero_celular: '68415154', correo_electronico: 'alejandra@gmail.com' },
    {id: 4, ci: '6547415', nummatricula: '6657BA', nombres: 'Ana Rosa',apellidos: 'Rodriguez Castellon', fecha_nacimiento: '01/01/2000', municipio:'Arani', direccion:'Calle Ingavi', numero_celular: '68412242', correo_electronico: 'ana@gmail.com' },
    {id: 5, ci: '6544571', nummatricula: '6658BA', nombres: 'Rolando',apellidos: 'Torrico Cordova', fecha_nacimiento: '04/03/2005', municipio:'Arani', direccion:'Calle Abaroa', numero_celular: '76548521', correo_electronico: 'rolando@gmail.com' },
];
//manejo de JSON
app.use(express.json());
//enpoint 1 obtener todos los libros
app.get('/Estudiantes', (req,res)=>{
    res.json(estudiantes);
});
//enpoint 2 obtener libro por id
app.get('/estudiantes/:id', (req, res) =>{
    const idCapturado = req.params.id;
    console.log(idCapturado);
    const estudianteEncontrado = estudiantes.find((estudiante) => estudiante.id == idCapturado);
    if(estudianteEncontrado){
        res.json(estudianteEncontrado);
    }else{
        res.status(404).json({mensaje : 'Libro no encontrado'});
    }
});
//enpoint 3 Agregar un estudiante
app.post('/agregar-estudiante', (req, res)=>{
    const nuevoestudiante = req.body;
    console.log(nuevoestudiante);
    estudiantes.push(nuevoestudiante);
    res.status(201).json('El estudiante registrado exitosamente!');
});
//enpoint 4 actualizar estudiante
app.put('/actualizar-estudiante/:id', (req, res)=>{
    const idCapturado = req.params.id;
    const indexEstudianteLocalizado = estudiantes.findIndex((estudiante) => estudiante.id == idCapturado);
    if(indexEstudianteLocalizado !== -1){
    estudiantes[indexEstudianteLocalizado] = req.body;
    res.json(estudiantes[indexEstudianteLocalizado]);
    }else{
        res.status(404).json({mensaje : 'Estudiante no encontrado'});
    }
});
// llamar al puerto
app.listen(PORT,()=> {
    console.log("Servidor corriendo en el puerto http://localhost:" + PORT);
});
