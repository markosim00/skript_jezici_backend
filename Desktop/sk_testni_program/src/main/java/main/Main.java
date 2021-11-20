package main;

import com.komponente.skladista.LocalStorage;
import com.komponente.skladista.Korisnici;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    private static LocalStorage localStorage = null;

    public static void main(String[] args) throws IOException{

        localStorage = new LocalStorage(args[0]);
        if(localStorage.exists()) {
            if(localStorage.login(args[1], args[2])) {
                System.out.println("Korisnik je uspesno prijavljen na skladiste");
            }
            else
                System.out.println("Ne postoji korisnik sa takvim imenom i lozinkom");
        }
        else
            localStorage = new LocalStorage(args[0], args[1], args[2]);

        Scanner sc = new Scanner(System.in);

        while(true){
            String command = sc.nextLine();
            String [] parts = command.split(" ");

            if(parts[0].equals("exit"))
                break;

            if(parts[0].equals("adduser")){
                if(parts[3].equals("light")){
                    if(localStorage.addUser(parts[1], parts[2], Korisnici.light))
                        System.out.println("Korisnik uspesno kreiran");
                    else
                        System.out.println("Greska prilikom kreiranja korisnika");
                }
                else if(parts[3].equals("lightWithDownload")){
                    if(localStorage.addUser(parts[1], parts[2], Korisnici.lightWithDownload))
                        System.out.println("Korisnik uspesno kreiran");
                    else
                        System.out.println("Greska prilikom kreiranja korisnika");
                }
                else if(parts[3].equals("medior")){
                    if(localStorage.addUser(parts[1], parts[2], Korisnici.medior))
                        System.out.println("Korisnik uspesno kreiran");
                    else
                        System.out.println("Greska prilikom kreiranja korisnika");
                }
                else if(parts[3].equals("premium")){
                    if(localStorage.addUser(parts[1], parts[2], Korisnici.premium))
                        System.out.println("Korisnik uspesno kreiran");
                    else
                        System.out.println("Greska prilikom kreiranja korisnika");
                }
            }

            if(parts[0].equals("login")){
                if(localStorage.login(parts[1], parts[2]))
                    System.out.println("Korisnik je uspesno prijavljen na skladiste");
                else
                    System.out.println("Ne postoji korisnik sa takvim imenom i lozinkom");
            }

            if(parts[0].equals("logout")){
                localStorage.logout();
                System.out.println("Korisnik je odjavljen sa skladista");
            }

            if(parts[0].equals("configsize")){
                localStorage.setMaxSizeInBytes(Integer.parseInt(parts[1]));
            }

            if(parts[0].equals("configfilesnum")){
                localStorage.setMaxNumberOfFiles(Integer.parseInt(parts[1]));
            }

            if(parts[0].equals("configext")){
                if(parts.length > 2) {
                    List<String> unsupportedExtensions = new ArrayList<String>();
                    for(int i = 1; i < parts.length; i++){
                        unsupportedExtensions.add(parts[i]);
                    }
                    localStorage.setUnsupportedExtensions(unsupportedExtensions);
                }
                else
                    localStorage.addUnsupportedExtension(parts[1]);
            }

            if(parts[0].equals("configrmext")){
                localStorage.removeUnsupportedExtension(parts[1]);
            }

            if(parts[0].equals("mkdir")){
                localStorage.createDirectory(parts[1]);
            }

            if(parts[0].equals("mkfile")){
                localStorage.createFile(parts[1]);
            }

            if(parts[0].equals("movefile")){
                File file = new File(parts[1]);
                localStorage.moveFile(file, parts[2]);
            }

            if(parts[0].equals("rmfile")){
                File file = new File(parts[1]);
                localStorage.deleteFile(file);
            }

            if(parts[0].equals("rmdir")){
                File directory = new File(parts[1]);
                localStorage.deleteDirectory(directory);
            }

            if(parts[0].equals("download")){
                localStorage.downloadFile(parts[1], parts[2]);
            }



            if(parts[0].equals("ls")){
                File directory = new File(parts[1]);
                String [] files = localStorage.getAllFilesFromDirectory(directory);
                if(files != null) {
                    for (String file : files) {
                        System.out.println(file);
                    }
                }
            }

            if(parts[0].equals("lsdir")){
                File directory = new File(parts[1]);
                String [] directories = localStorage.getAllDirectoriesFromDirectory(directory);
                if(directories != null) {
                    for (String dir : directories) {
                        System.out.println(dir);
                    }
                }
            }

            if(parts[0].equals("lschild")){
                List<File> fileList = new ArrayList<File>();
                String [] children = localStorage.getAllChildren(parts[1], fileList);
                if(children != null) {
                    for (String child : children) {
                        System.out.println(child);
                    }
                }
            }

            if(parts[0].equals("ext")){
                String [] files = localStorage.getFilesByExtension(parts[1]);
                if(files != null) {
                    for (String file : files)
                        System.out.println(file);
                }
            }

            if(parts[0].equals("snameasc")){
                String [] files = localStorage.getFilesSortedByNameAsc();
                if(files != null) {
                    for (String file : files)
                        System.out.println(file);
                }
            }

            if(parts[0].equals("snamedesc")){
                String [] files = localStorage.getFilesSortedByNameDesc();
                if(files != null) {
                    for (String file : files)
                        System.out.println(file);
                }
            }

            if(parts[0].equals("sdateasc")){
                String [] files = localStorage.getFilesSortedByDateAsc();
                if(files != null) {
                    for (String file : files)
                        System.out.println(file);
                }
            }

            if(parts[0].equals("sdatedesc")){
                String [] files = localStorage.getFilesSortedByDateDesc();
                if(files != null) {
                    for (String file : files)
                        System.out.println(file);
                }
            }

            if(parts[0].equals("period")){
                String [] files = localStorage.getAllFilesInPeriod(Long.parseLong(parts[1]), Long.parseLong(parts[2]));
                if(files != null) {
                    for (String file : files)
                        System.out.println(file);
                }
            }

            if(parts[0].equals("perioddir")){
                File directory = new File(parts[3]);
                String [] files = localStorage.getAllFilesInPeriodInDirectory(Long.parseLong(parts[1]), Long.parseLong(parts[2]), directory);
                if(files != null) {
                    for (String file : files)
                        System.out.println(file);
                }
            }

        }


    }

}
