const { Device, DeviceInfo } = require(`../models/models`);
const ApiError = require(`../error/ApiError`);
const uuid = require(`uuid`);
const path = require(`path`);

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, `..`, `static`, fileName));

      if (info) {
        info = JSON.parse(info);
        info.forEach((element) => {
          DeviceInfo.create({
            title: element.title,
            description: element.description,
            deviseId: device.id,
          });
        });
      }

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        info,
        img: fileName,
      });
      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let where = {};
    if (brandId) where.brandId = brandId;
    if (typeId) where.typeId = typeId;
    const devices = await Device.findAndCountAll({
      where,
      limit,
      offset,
    });
    return res.json(devices);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: `info` }],
    });
    return res.json(device);
  }
}

module.exports = new DeviceController();
