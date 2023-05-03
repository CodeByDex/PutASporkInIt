module.exports = {
    SafeGetAll: SafeGetAll,
    SafeGetByID: SafeGetByID,
    SafeCreate: SafeCreate,
    SafeUpdate: SafeUpdate,
    SafeDelete: SafeDelete,
    SafeRequest: SafeRequest,
    VerifyLoggedIn: VerifyLoggedIn
}

function VerifyLoggedIn(req, res, next) {
    if (!req.session.loggedIn) {
        res.status(401).render("login");
        return;
    }

    next();    
};

async function SafeRequest(res, cb) {
    try {
        await cb(res);
    } catch (err) {
        console.log(err);
        let errCode = 500;
        let errMsg = "Internal Error";

        if (err instanceof ParamError) {
            errCode = err.statusCode;
            errMsg = err.message;
        }

        res.status(errCode).json(errMsg);
    }
}

async function SafeGetAll(res, model, includes, whereClause) {
    SafeRequest(res, async (res) => {
        const modelData = await model.findAll({
            include: includes,
            where: whereClause
        });

        res.json(modelData.map(x => x.get()));
    })
}

async function SafeGetByID(ID, res, model, includes) {
    SafeRequest(res, async (res) => {
        const modelData = await getByID(ID, model, includes);

        res.json(modelData.get());
    })
}

async function SafeCreate(res, model, modelData) {
    SafeRequest(res, async (res) => {
        res.json(await model.create(modelData));
    })
}

async function SafeUpdate(ID, res, model, modelData) {
    SafeRequest(res, async (res) => {
        let reqModRec = await getByID(ID, model, []);

        reqModRec.set(modelData);

        let upModRec = await reqModRec.save();

        res.json(upModRec);
    })
}

async function SafeDelete(ID, res, model) {
    SafeRequest(res, async (res) => {
        let reqMod = await getByID(ID, model, []);

        let reqRes = await reqMod.destroy();

        res.json(reqRes);
    })
}

async function getByID(ID, model, includes) {
    if (isNaN(ID)) {
        throw new ParamError();
    }

    return await model.findByPk(ID, {
        include: includes
    });
}

class ParamError extends Error {
    constructor() {
        super("Invalid Param Value");
        this.statusCode = 400;
    }
}