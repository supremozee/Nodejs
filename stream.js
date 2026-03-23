//Streaming makes the data processing more efficient in terms
//  of memory Because there is no need to keep all data in the memory
//In terms of performance also, streaming has its advantage because we ca start processing the data as soon
//as the first chunk of data arrives

//Readable Stream
//Writaeable Stream
//Duplex stream
//Transform Stream

// ReadFile                     ReadStream          ReadBuffer                        Read

//Pipe method is a mechanism for connecting the output of a readable stream to the input of a writable stream.
//  It automatically manages the flow of data and handles backpressure,
//  making it an efficient and simple way to process large amounts of data without overwhelming

//Data Transfer: The primary function of pipe() is to move data from a source (readable stream) to a destination (writable stream) incrementally in chunks, rather than loading the entire content into memory at once.
//Automatic Flow Control (Backpressure): It automatically regulates the speed of data flow. If the writable stream is slower than the readable stream, pipe() will pause the readable stream until the writable stream is ready for more data (signaled by the 'drain' event), preventing memory issues.
//Chaining: The pipe() method returns the destination stream, which allows for chaining multiple pipe() calls together. This is especially useful for transform streams, which are both readable and writable (e.g., compressing data with zlib.createGzip()