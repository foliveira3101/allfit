﻿namespace allfit_members_api.Models
{
    public class Member
    {
        public int id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string WhatsApp { get; set; }
        public byte[] Photo { get; set; }
        public bool IsActive { get; set; }        

    }
}
