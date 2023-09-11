import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import { getTransactions } from "../../src/services/getTransactions";


const mock = new MockAdapter(axios);
