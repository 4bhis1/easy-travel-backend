const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const itineraryService = require('../services/itinerary.service');

const generate = catchAsync(async (req, res) => {
  const generateItineraryDto = req.body;
  const response = await itineraryService.generateItinerary(generateItineraryDto, req.user);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Response not found');
  }
  res.send(response);
});

const locationImage = catchAsync(async (req, res) => {
  const { location } = req.query;
  const response = await itineraryService.fetchLocationImage(location);
  if (!response) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Response not found');
  }
  res.send(response);
});

module.exports = {
  generate,
  locationImage,
};
