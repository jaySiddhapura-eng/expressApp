const getAll = (req, res, next)=>{
    res.send('getAll function executed');
}

const newItem = (req, res, next)=>{
    res.send('newItem function executed');
}

const deleteAllItems = (req, res, next)=>{
    res.send('deleteAllItem function executed');
}

const getOneItem = (req, res, next)=>{
    res.send('getOneItem function executed');
}

const deleteOneItem = (req, res, next)=>{
    res.send('deleteOneItem function executed');
}

module.exports = { 
    getAll,
    newItem,
    deleteAllItems,
    getOneItem,
    deleteOneItem
};