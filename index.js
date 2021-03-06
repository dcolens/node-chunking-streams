var libPath = process.env.COVER == 'CHUNKING' ? './lib-cov' : './lib';

module.exports = {
   Chunker: require(libPath + '/size-chunker'),
   LineCounter: require(libPath + '/line-counter'),
   GZipChunker: require(libPath + '/gzip-chunker'),
   S3MultipartUploader: require(libPath + '/s3-multipart'),
   SeparatorChunker: require(libPath + '/separator-chunker.js')
};