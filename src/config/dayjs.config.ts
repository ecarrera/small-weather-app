import dayjs from "dayjs";

import localizedFormat from "dayjs/plugin/localizedFormat";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(localizedFormat);
dayjs.extend(isBetween);
