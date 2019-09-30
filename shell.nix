{ pkgs ? import <nixpkgs> {} }:

with pkgs;

mkShell {
  name = "monarch-eurasia-website";
  buildInputs = [
    ruby
  ];

  shellHook = ''
    mkdir -p .nix-gems

    export GEM_HOME=$PWD/.nix-gems/$(ruby -e "puts RUBY_VERSION")
    export GEM_PATH=$GEM_HOME
    export PATH=$GEM_HOME/bin:$PATH
  '';
}
