module.exports = (sequelize, DataTypes) => {
    const Mahasiswa = sequelize.define("mahasiswa", {
        nim_mahasiswa: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nama_mahasiswa: {
            type: DataTypes.STRING,
        },
        kelas_mahasiswa: {
            type: DataTypes.STRING,
        },
        alamat_mahasiswa: {
            type: DataTypes.STRING,
        },
    })
    return Mahasiswa;
}
