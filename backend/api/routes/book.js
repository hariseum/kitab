const Book = require('../../models/book')

module.exports = function (router) {

    router.post('/book', function (req, res) {
        let note = new Book(req.body)
        note.save(function (err, note) {
            if (err) {
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

    router.get('/book', function (req, res) {
        // res.send("hello");
        Book.find({}, (err, book) => {
            // Check if error was found or not
            if (err) {
                res.json({ success: false, message: err }); // Return error message
            } else {
                // Check if book were found in database
                if (!book) {
                    res.json({ success: false, message: 'No book found.' }); // Return error of no book found
                } else {
                    res.json({ success: true, book }); // Return success and book array
                }
            }
        })
    })

    // Searching
    router.get('/book/:title', function (req, res) {
        Book.find({ title:req.params.title }, (err, book) => {
            if(err) {
                res.json({ success: false, message: err });
            } else {
                if (!book) {
                    res.json({ success: false, message: 'No book found.' });
                } else {
                    res.json({ success: true, book:book });
                }
            }
        })
    })

    router.put('/updateBook', (req, res) => {
        // Check if id was provided
        if(!req.body._id) {
            res.json({ success: false, message: 'No book id provided' }); // Return error message
        } else {
            // Check if id exist in database
            Book.findOne({ _id: req.body._id }, (err, book) => {
                // Check if id is a valid ID
                if (err) {
                    res.json({ success: false, message: 'Not a valid book id'}); // Return error message
                } else {
                    book.isbn = req.body.isbn;
                    book.cover = req.body.cover;
                    book.title = req.body.title;
                    book.author = req.body.author;
                    book.publish_date = req.body.publish_date;
                    book.publisher = req.body.publisher;
		    book.genre = req.body.genre;
                    book.rating = req.body.rating;
                    book.reviews = req.body.reviews;
                    book.ori_price = req.body.ori_price;
                    book.dis_price = req.body.dis_price;
                    book.save((err) => {
                        if (err) {
                            res.json({ success: false, message: err }); // Return error message
                        } else {
                            res.json({ success: true, message: 'book Updated!' }); // Return success message
                        }
                    });
                }
            });
        }
    });

    router.delete('/deleteBook/:id', (req, res) => {
        // Check if ID was provided in parameters
        if (!req.params.id) {
            res.json({ success: false, message: 'No id provided' }); // Return error message
        } else {
            // Check if id is found in database
            Book.findOne({ _id: req.params.id }, (err, book) => {
                // Check if error was found
                if (err) {
                    res.json({ success: false, message: 'Invalid id' }); // Return error message
                } else {
                    // Remove the book from database
                    book.remove((err) => {
                        if (err) {
                            res.json({ success: false, message: err }); // Return error message
                        } else {
                            res.json({ success: true, message: 'Book deleted!' }); // Return success message
                        }
                    });
                }
            });
        }
    });
}