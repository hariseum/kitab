const allBook = require('../../models/allbook')

module.exports = function (router) {

    router.post('/allbook', function (req, res) {
        let note = new allBook(req.body)
        note.save(function (err, note) {
            if (err) {
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

    router.get('/allbook', function (req, res) {
        // res.send("hello");
        allBook.find({}, (err, allbook) => {
            // Check if error was found or not
            if (err) {
                res.json({ success: false, message: err }); // Return error message
            } else {
                // Check if allbook were found in database
                if (!allbook) {
                    res.json({ success: false, message: 'No allbook found.' }); // Return error of no allbook found
                } else {
                    res.json({ success: true, allbook }); // Return success and allbook array
                }
            }
        })
    })

    // Searching
    router.get('/allbook/:title', function (req, res) {
        allBook.find({ title:req.params.title }, (err, allbook) => {
            if(err) {
                res.json({ success: false, message: err });
            } else {
                if (!allbook) {
                    res.json({ success: false, message: 'No allbook found.' });
                } else {
                    res.json({ success: true, allbook:allbook });
                }
            }
        })
    })

    router.put('/updateallBook', (req, res) => {
        // Check if id was provided
        if(!req.body._id) {
            res.json({ success: false, message: 'No allbook id provided' }); // Return error message
        } else {
            // Check if id exist in database
            allBook.findOne({ _id: req.body._id }, (err, allbook) => {
                // Check if id is a valid ID
                if (err) {
                    res.json({ success: false, message: 'Not a valid allbook id'}); // Return error message
                } else {
                    allbook.isbn = req.body.isbn;
                    allbook.cover = req.body.cover;
                    allbook.title = req.body.title;
                    allbook.author = req.body.author;
                    allbook.publish_date = req.body.publish_date;
                    allbook.publisher = req.body.publisher;
		            allbook.genre = req.body.genre;
                    allbook.rating = req.body.rating;
                    allbook.reviews = req.body.reviews;
                    allbook.ori_price = req.body.ori_price;
                    allbook.dis_price = req.body.dis_price;
                    allbook.save((err) => {
                        if (err) {
                            res.json({ success: false, message: err }); // Return error message
                        } else {
                            res.json({ success: true, message: 'allbook Updated!' }); // Return success message
                        }
                    });
                }
            });
        }
    });

    router.delete('/deleteallBook/:id', (req, res) => {
        // Check if ID was provided in parameters
        if (!req.params.id) {
            res.json({ success: false, message: 'No id provided' }); // Return error message
        } else {
            // Check if id is found in database
            allBook.findOne({ _id: req.params.id }, (err, allbook) => {
                // Check if error was found
                if (err) {
                    res.json({ success: false, message: 'Invalid id' }); // Return error message
                } else {
                    // Remove the allbook from database
                    allbook.remove((err) => {
                        if (err) {
                            res.json({ success: false, message: err }); // Return error message
                        } else {
                            res.json({ success: true, message: 'allBook deleted!' }); // Return success message
                        }
                    });
                }
            });
        }
    });
}