const Service = require ('../models/Service');

//Creating new service
const createService = async (req, res) => {
    const {
        title,
        description,
        price,
        category
    } =req.body;

    const provider = req.user.id;

    try {
        const service = new service ({
            title,
            description,
            price, provider,
            category
        });

        await service.save ();
        res.status(201).json(service);
    } catch (error) {
        res.status(500).json ({ message:'Server error'});
    }
};

//get services created by the provider (or the experts)
const getProviderServices = async (req, res) => {
    const providerId = req.user.id;

    try {
        const services = await Service.find({ provider: providerId});
        res.status (200).json(services);
    } catch (error) {
        res.status(500).json({ message: 'Server error'});
    }
};

//for updating the details of the services
const updateService = async (req, res) => {
    const serviceId = req.params.id;

    try {
        const service = await Service.findByIdAndUpdate (serviceId, req.body, { new: true});
        if (!service)
            return res.status (404).json({message: 'Service not found'});

        res.status(200).json(service);
    } catch (error) {
        req.status(500).json ({message: ' Server error'});
    }
};

//Get All Services
const getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: 'Server error'});
    }
};

module.exports = {
    createService,
    getProviderServices,
    updateService,
    getAllServices,
}