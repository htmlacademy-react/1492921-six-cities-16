import { getRatingInPercents, isValidCity, numberItemsText } from './utils';

describe('UTILS', () => {
  describe('Function: numberItemsText', () => {
    it('should return the plural word', () => {
      const mockNumberItems = { count: 5, text: 'bedroom' };
      const resultValid = '5 bedrooms';

      const result = numberItemsText(
        mockNumberItems.count,
        mockNumberItems.text
      );

      expect(result).toBe(resultValid);
    });
    it('should return the singular word', () => {
      const mockNumberItems = { count: 1, text: 'bedroom' };
      const resultValid = '1 bedroom';

      const result = numberItemsText(
        mockNumberItems.count,
        mockNumberItems.text
      );

      expect(result).toBe(resultValid);
    });
  });
  describe('Function: getRatingInPercents', () => {
    it('should return 60% for 3.4 rating', () => {
      const mockRating = 3.4;
      const resultValid = 60;

      const result = getRatingInPercents(mockRating);

      expect(result).toBe(resultValid);
    });
    it('should return 80% for 3.5 rating', () => {
      const mockRating = 3.5;
      const resultValid = 80;

      const result = getRatingInPercents(mockRating);

      expect(result).toBe(resultValid);
    });
  });
  describe('Function: isValidCity', () => {
    it('should return "true" when city name is correct', () => {
      const mockCityName = 'Amsterdam';

      const result = isValidCity(mockCityName);

      expect(result).toBe(true);
    });
    it('should return "false" when city name is not correct', () => {
      const mockCityName = 'Omsk';

      const result = isValidCity(mockCityName);

      expect(result).toBe(false);
    });
    it('should return "false" when city name is null', () => {
      const mockCityName = null;

      const result = isValidCity(mockCityName);

      expect(result).toBe(false);
    });
  });
});
