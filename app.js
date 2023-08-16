// simple away to add or remove key to an object

const db = {};
// ["manna", 'sani','sakib', 'manna', 'shakib','Rubel', 'manna'];
// {manna:2, sani:1}
const addToDb = itme => {
    const db = getDb();
    if(itme in db){
        db[itme] = db[itme] + 1;
    }
    else{
        
    db[itme] = 1;
    }
    console.log(db);
}
const getDb =() =>{
    return db;
}
const removeDb = itme =>{
    const db = getDb();
    delete db[itme];
}