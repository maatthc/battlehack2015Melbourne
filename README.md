battlehack2015Melbourne
====================

Paypal Battle Hack 2015: SmartBin


Team
=====
* Alexandre Andrade <aleandrade@gmail.com>
* Anthony <squirepokeh@gmail.com>
* Camilo <Camilob@gmail.com>
* Steve <sworisbreathing@gmail.com>



PayPal Integration
==================

Use Reference Transactions - https://developer.paypal.com/docs/classic/express-checkout/integration-guide/ECReferenceTxns/

Specs
=====
A smart bin that recognizes the type of trash and selects the kind of bin to be used: reciclable or Non reciclable!
A smartphone running Android takes pictures of the garbage, sends it to a remote API that compares that picture with different samples and returns whether that is reciclable or not.
An Arduino board receives via USB the commands from the Android APP and activates a Step Motor, that turns left or right, depending on the type of trash, and drops the garbage into the correct bin.