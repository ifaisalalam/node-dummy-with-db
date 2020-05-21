variable "region" {
  default = "ap-south-1"
}

variable "rds_engine" {
  default = "aurora-postgresql"
}

variable "rds_database_name" {
  default = "test"
}

variable "rds_master_username" {
  default = "superuser"
}

variable "rds_master_password" {
  default = "password"
}
