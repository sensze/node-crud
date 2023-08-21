const MahasiswaController = require('../controllers/MahasiswaController.js');
const router = require('express').Router();

router.get('/getMahasiswa', MahasiswaController.getMahasiswa);
router.get('/getSingleMahasiswa/:id', MahasiswaController.getSingleMahasiswa);
router.post('/addMahasiswa', MahasiswaController.addMahasiswa);
router.put('/updateMahasiswa/:id', MahasiswaController.updateMahasiswa);
router.delete('/deleteMahasiswa/:id', MahasiswaController.deleteMahasiswa);

module.exports = router;