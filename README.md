# EBANX Coding Test

## Script

* Reset state before starting tests

     POST /reset

* Get balance for non-existing account

     GET /balance?account_id=1234

* Create account with initial balance

     POST /event {"type":"deposit", "destination":"100", "amount":10}

* Deposit into existing account

     POST /event {"type":"deposit", "destination":"100", "amount":10}

* Get balance for existing account

     GET /balance?account_id=100

* Withdraw from non-existing account

     POST /event {"type":"withdraw", "origin":"200", "amount":10}

* Withdraw from existing account

     POST /event {"type":"withdraw", "origin":"100", "amount":5}


* Transfer from existing account

     POST /event {"type":"transfer", "origin":"100", "amount":15, "destination":"300"}

* Transfer from non-existing account

     POST /event {"type":"transfer", "origin":"200", "amount":15, "destination":"300"}