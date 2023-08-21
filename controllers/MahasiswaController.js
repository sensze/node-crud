const db = require('../models');

const Mahasiswa = db.tb_mahasiswa;

// Create and Save a new Mahasiswa
const addMahasiswa = async (req, res) => {
    let info = {
        nama_mahasiswa: req.body.nama_mahasiswa,
        nim_mahasiswa: req.body.nim_mahasiswa,
        kelas_mahasiswa: req.body.kelas_mahasiswa,
        alamat_mahasiswa: req.body.alamat_mahasiswa,
    }
    const mahasiswa = await Mahasiswa.create(info);
    res.status(200).send({
        message: "Insert Success",
        data: mahasiswa,
    });
    console.log(mahasiswa);
}

// Retrieve all Mahasiswa from the database.
const getMahasiswa = async (req, res) => {
    let mahasiswa = await Mahasiswa.findAll({

        // Specify the attributes that you want to select.
        // attribute: [
        //     "nama_mahasiswa",
        //     "nim_mahasiswa",
        //     "kelas_mahasiswa",
        //     "alamat_mahasiswa",
        // ]
    });
    res.status(200).send({
        message: "Get Success",
        data: mahasiswa,
    });
}

// Find a single Mahasiswa with an id
const getSingleMahasiswa = async (req, res) => {
    let id = req.params.id;
    let mahasiswa = await Mahasiswa.findOne({where: {id: id}});
    res.status(200).send({
        message: "Find Success",
        data: mahasiswa,
    });
}

// Update a Mahasiswa by the id in the request
const updateMahasiswa = async (req, res) => {
    let id = req.params.id;
    const mahasiswa = await Mahasiswa.update(req.body, {where: {id: id}});
    res.status(200).send({
        message: "Update Success",
        data: mahasiswa
    })
}

// Delete a Mahasiswa with the specified id in the request
const deleteMahasiswa = async (req, res) => {
    let id = req.params.id;
    const mahasiswa = await Mahasiswa.destroy({where: {id: id}});
    res.status(200).send({
        message: "Delete Success",
    })
}

module.exports = {
    addMahasiswa,
    getMahasiswa,
    getSingleMahasiswa,
    updateMahasiswa,
    deleteMahasiswa,
}