
switch (recipe) {
  case 'SPANISH':
    fudge = SPANISH_FUDGE;
    amt = base * fudge;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
    break;
  case 'FRENCH':
    fudge = FRENCH_FUDGE;
    amt = base * fudge;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
    chocolate = 7;
    break;
  case 'ENGLISH':
    fudge = ENGLISH_FUDGE;
    amt = base * fudge;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
    break;
  default:
    fudge = 1;
    amt = base;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
}