//Question 1
db.bios.find({"awards": {$exists : true}})
//Question 2
db.bios.find({"awards": {$exists : false}})
//Question 3
db.bios.find({$or: [{"contribs": "OOP"}, {"contribs": "UNIX"}]})
//Question 4
db.bios.find({"awards.award": "Turing Award"})
//Question 5
db.bios.find({"_id" : {$gte: 3, $lte 7}})
//Question 6
db.bios.find({"awards.year": {$lt : 2000}})
//Question 7
db.bios.find({"birth" : {$exists : true}, "death" : {$exists : false}})
