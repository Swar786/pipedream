import infusionsoft from "../../app/infusionsoft.app";
import { defineAction } from "@pipedream/types";

export default defineAction({
  name: "Get Contact",
  description: "Retrieve details of a Contact [See docs here](https://developer.infusionsoft.com/docs/rest/#operation/getContactUsingGET)",
  key: "infusionsoft-get-contact",
  version: "0.0.1",
  type: "action",
  props: {
    infusionsoft,
    contactId: {
      propDefinition: [
        infusionsoft,
        "contactId"
      ]
    }
  },
  async run({ $ }): Promise<object> {
    const contact = await this.infusionsoft.getContact({
      contactId: this.contactId
    });

    $.export("$summary", `Retrieved Contact "${contact.given_name ?? contact.id}" successfully`);

    return contact;
  },
});
