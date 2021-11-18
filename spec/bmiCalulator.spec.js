const BMICalculator = require('../src/js/bmiCalculator')

subject = new BMICalculator();

describe("BMICalculator", () => {
  describe("#calculateMetric()", () => {
    let results
    beforeEach(() => {
      results = subject.calculateMetric({
        height: 1.86,
        weight: 105
      });
    });

    it("is expected to return a numeric value (float with 2 decimals) if given proper arguments", () => {
      //expect(subject.calculateMetric({ height: 1.86, weight: 105 })). toEqual(30.35)
      expect(results.value).toEqual(30.35);
    });

    it('is expected to return a classification of "Obesity Class 1', () => {
      expect(results.classification).toEqual('Obesity Class 1');
    });
  });

  describe("Miyesier()", () => {
    let results
    beforeEach(() => {
      results = subject.calculateMetric({
        height: 1.71,
        weight: 55
      });
    });

    it("is expected to return a numeric value (float with 2 decimals) if given proper arguments", () => {
      expect(results.value).toEqual(18.81);
    });

    it('is expected to return a classification of "Normal weight', () => {
      expect(results.classification).toEqual('Normal weight');
    });
  });
  describe("A Fictional Person", () => {
    let results
    beforeEach(() => {
      results = subject.calculateMetric({
        height: 1.70,
        weight: 140
      });
    });

    it("is expected to return a numeric value (float with 2 decimals) if given proper arguments", () => {
      expect(results.value).toEqual(48.44);
    });

    it('is expected to return a classification of "Extreme Obesity Class 3', () => {
      expect(results.classification).toEqual('Extreme Obesity Class 3')
    });
  });
});