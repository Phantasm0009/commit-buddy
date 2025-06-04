const mockExeca = jest.fn();

module.exports = {
  execa: mockExeca,
  default: { execa: mockExeca }
};
