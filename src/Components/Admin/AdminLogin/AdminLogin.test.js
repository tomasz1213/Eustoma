import AdminLogin from "./AdminLogin";
import { render, screen } from "../../../test-utils";

describe("<AdminLogin/>", () => {
	test("render admin login form", async () => {
		render(<AdminLogin />);
	});
});
